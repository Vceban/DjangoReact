from articles.models import Article, Item
from rest_framework import viewsets, permissions
from rest_framework.generics import ListAPIView
from .serializers import ArticleSerializer, ItemSerializer
from django.http import Http404
from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST

# Article Viewset

class ArticleViewSet(viewsets.ModelViewSet):
	permission_classes = [
		permissions.IsAuthenticated,
	]
	serializer_class = ArticleSerializer
	def get_queryset(self):
	    return self.request.user.articles.all()
	def perform_create(self, serializer):
	    serializer.save(owner=self.request.user)
# Item ListAPIView

class ItemViewSet(viewsets.ModelViewSet):
	queryset = Item.objects.all()
	permission_classes = [
		permissions.AllowAny
	]
	serializer_class = ItemSerializer

# ADD TO CART
class AddToCartView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    permission_classes = [
   		permissions.AllowAny
   	]
    serializer_class = ItemSerializer

    def post(self, request, *args, **kwargs):
        slug = request.data.get('slug', None)
        variations = request.data.get('variations', [])
        if slug is None:
            return Response({"message": "Invalid request"}, status=HTTP_400_BAD_REQUEST)

        item = get_object_or_404(Item, slug=slug)

        minimum_variation_count = Variation.objects.filter(item=item).count()

        if len(variations) < minimum_variation_count:
            return Response({"message": "Please specify the required variation types"}, status=HTTP_400_BAD_REQUEST)

        order_item_qs = OrderItem.objects.filter(
            item=item,
            user=request.user,
            ordered=False
        )
        for v in variations:
            order_item_qs = order_item_qs.filter(
                Q(item_variations__exact=v)
            )

        if order_item_qs.exists():
            order_item = order_item_qs.first()
            order_item.quantity += 1
            order_item.save()
        else:
            order_item = OrderItem.objects.create(
                item=item,
                user=request.user,
                ordered=False
            )
            order_item.item_variations.add(*variations)
            order_item.save()

        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order = order_qs[0]
            if not order.items.filter(item__id=order_item.id).exists():
                order.items.add(order_item)
                return Response(status=HTTP_200_OK)

        else:
            ordered_date = timezone.now()
            order = Order.objects.create(
                user=request.user, ordered_date=ordered_date)
            order.items.add(order_item)
            return Response(status=HTTP_200_OK)

