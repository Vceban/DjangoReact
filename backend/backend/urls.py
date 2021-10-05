from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
	path('', include('frontend.urls')),
	path('', include('articles.urls')),
	path('', include('accounts.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                                document_root = settings.MEDIA_ROOT)

if not settings.DEBUG:
    urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name = 'index.html'))]


