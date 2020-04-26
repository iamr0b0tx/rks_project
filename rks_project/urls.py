from django.contrib import admin
from django.conf import settings
from django.conf.urls import url
from django.urls import include, path
from django.conf.urls.static import static

from . import views
from register.views import register

admin.site.site_header = 'Spatial Ardhi Dashboard'  # default: "Django Administration"
admin.site.index_title = 'Spatial Ardhi Dashboard' # default: "Site administration"
admin.site.site_title = 'Spatial Ardhi Dashboard' # default: "Django site admin"

admin.autodiscover()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('rk/', include('frontend.urls')),
    
	# url(r'houses/', views.houses, name='houses'),
	# url(r'lands/', views.lands, name='lands'),
	# url(r'house/(?P<pid>[^/]+)$', views.house_detail, name='house_detail'),
	# url(r'land/(?P<pid>[^/]+)$', views.land_detail, name='land_detail'),
    # url(r'property/(?P<pid>[^/]+)$', views.property_detail, name='property_detail'),
    # url(r'register/', register, name='register'),
    # # url(r'', include('django.contrib.auth.urls')),
    # url('', views.home, name='home'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)