Fejax nedir ?
=============
Bilindiği üzere artık web sayfalarında Ajax'ın önemi büyüktür. Çoğu büyük web sitesi Ajax teknolojilerini kullanmakta ve her geçen gün daha da geliştirmekte. Lakin Ajax'ın büyük avantajlarının yanında dezavantajları da bulunmakta. Fejax size statik, ya da dinamik sayfalarınızı kolayca Ajax'a çevirmekte ve Ajax'ın klasik dezavantajlarını sizin için aşmaktadır.

- SEO. Arama motorları javascript'i tanıyamamaktadır. Ajax ile açtığınız sayfaları arama motorlarının bulması güçleşecektir.
- Geri, ileri butonlarının çalışmaması
- Sayfa yenilendiğinde ajax ile yapılan işlemlerin kaybolması
- Ajax ile açılan yerin url'inin alınamaması

Fejax'ın özellikleri
====================
- Tek satır ile tüm sitenize Ajax'a çevirebilirsiniz.
- Ajax ile yüklenen sayfaları efektli bir şekilde açabilirsiniz.
- Sayfada yenileme olmadan geri ve ileri butonlarını kullanıcı çalıştırabilir.
- Kullanıcı sayfayı yenilediğinde kaldığı sayfadan devam edebilir.
- SEO açısından sayfanın kaynak kodunda salt html şekildedir.


Dökümantasyon
=============
Başlangıç
---------
 Fejax'ı sayfanızda kullanmak için jQuery betiğini ve jquery.fejax.js'yi sayfanıza dahil etmeniz gerekir.

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
	<script src="fejax/jquery.fejax.js"></script>

 
Fejax'ı kullanmak
-----------------
 Sayfadaki ajax ile yenilenmesini istediğiniz bölümü seçip fejax'ı uygulayabilirsiniz. İşte bu kadar !

	<script>    
		$(function () {
			$("#container").fejax();
		})
	</script>


Fejax'ı kurcalamak
-------------------
 Fejax'ın opyisonları ile istediğiniz şekilde özelleştirebilirsiniz. Örneğin sayfa yükleme efektini kapatabilir, ya da değiştirebilirsiniz.

	<script>    
		$(function () {
			$("#container").fejax({
				"close_effect" : function (page) { page.slideUp(); },
				"open_effect" : function (page) { page.slideDown(); }
			});
		})
	</script>


Ajax ile yüklenmesini istemediğiniz linkler
--------------------------------------------
 Fejax http ile başlayan linkleri, harici bağlantıları varsayılan olarak pasif etmiştir. Ayrıca siz de ajax ile yüklenmesini istemediğiniz sayfalara no_ajax class'ını atayabilirsiniz.

	<a href="her_hangi_bir_sayfa.html" class="no_ajax">heey</a>


Demo
=====
 Demo, dökümantasyon ve daha detaylı bilgi için;
 http://fatiherikli.com/fejax/