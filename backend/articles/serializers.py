from rest_framework import serializers
from articles.models import Article, Item

class ArticleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Article
		fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
	category = serializers.SerializerMethodField()
	label = serializers.SerializerMethodField()
	class Meta:
		model = Item
		fields = (
		    'id',
			'title',
    		'price',
    		'discount_price',
    		'category',
    		'label',
    		'slug',
    		'description',
    		'image'
			)

	def get_category(self, obj):
		return obj.get_category_display()

	def get_label(self, obj):
		return obj.get_label_display()


