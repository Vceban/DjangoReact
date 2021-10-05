from rest_framework import routers
from .api import (
ArticleViewSet,
ItemViewSet,
AddToCartView
)


router = routers.DefaultRouter()
router.register('api/articles', ArticleViewSet, 'articles')
router.register('api/product-list', ItemViewSet, 'product-list')
router.register('api/add-to-cart', AddToCartView, 'add-to-cart')

urlpatterns = router.urls