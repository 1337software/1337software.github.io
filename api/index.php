<!DOCTYPE html>
<html lang="en">
<head>
    <title>API Dokümantasyonu - APİ1337</title>
    <meta charset="UTF-8"/>
    <meta name="description" content="Güçlü API'mizin neler sunabileceğini keşfedin. API'mız ile özellikleri yöneticimizden sorunsuzca kendi sisteminize entegre edebilirsiniz.."/>
    <meta name="robots" content="index, follow"/>
    <meta name="revisit-after" content="1 Days"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="HasanAtilan">
<link rel="shortcut icon" type="image/png" href="https://1337.com.tr/tasarim/favicon.png">
<link rel="shortcut icon" sizes="196x196" href="https://1337.com.tr/tasarim/favicon.png">
<link rel="apple-touch-icon" href="https://1337.com.tr/tasarim/favicon.png">
    <link href="tasarim/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
    <link href="tasarim/style.css" rel="stylesheet">
    <link href="tasarim/bootstrap-select.css" rel="stylesheet">

 
    <meta name="theme-color" content="#ffffff">

    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700,700italic' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Maven+Pro:400,700" rel="stylesheet" type="text/css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>

    <script src='tasarim/bootstrap.js'></script>
    <script src='tasarim/bootstrap-select.js'></script>



</head>

<body>
<style>

  @charset "utf-8";
  @import url(https://fonts.googleapis.com/css?family=Press+Start+2P);
  @font-face {
  font-family: forza;
  src: url(forza.otf);
}
  
</style>
<div class="wrapper">

  <div class="container" style="margin-top:25px;">

    <div class="row">

      <div class="col-md-6">

  <h1><i class="fa fa-terminal"></i> API</h1>
  <p class="paragraph">1337.COM.TR API Kullanarak Sizde Kendi Firmanizi Olusturabilirsiniz !</p>

</div>
 <div class="col-md-6">

 <h1> <a href="https://1337.com.tr/" class="btn btn-info btn-lg pull-right">1337.COM.TR Anasayfa</a></h1>

  </div>
</div>

<hr/>

   <div class="row">

    <div class="col-md-3">

      <ul class="nav nav-pills nav-stacked" style="max-width: 300px;">
        <li class="active"><a>APİ DESTEKLEYEN SİTELERİMİZ</a></li>
		<li><a>1337.COM.TR</a></li>
		<li><a>1337.NET.TR</a></li>
		<li><a>NEPİX.COM.TR</a></li>
		<li><a>NEPİX.NET</a></li>
		
    </ul>

    </div>

     <div class="col-md-9">

      <div class="article">

       <h1> Sizde APİ Sağlayıcımız Üzerinden Servislerimizden Yararlanabilirsiniz </h1>
       <hr/>
       <p class="paragraph">
        1337 API'sını kullanmak için öncelikle 1337.com.tr WAF yöneticinizde gizli bir anahtar oluşturmanız gerekir. Bu anahtarın tüm API çağrılarında sağlanması gerekir..
<br><br>
Tüm API isteklerine şu adresten erişilir <span class="text-success">https</span>://1337.com.tr/api/ ve gönderilmelidir <span class="text-success">HTTPs</span> ek güvenlik için. API’ya yapılan tüm istekler, Yetkilendirilmiş sahip olmalı ve geçerli değer olarak ayarlanmış geçerli bir gizli anahtar olmalıdır..
  <h3>Örnek istek</h3>

    <pre><span class="label label-info">POST</span> https://1337.com.tr/api/</pre>
   <table class="table table-bordered" style="">
     
     <thead>
        
        <th>Parametre</th>
        <th>Açıklama</th>
 
     </thead>

     <tbody>

      <tr>
       <td>Yetkilendirme (BASLİK_GONDER - başlık)</td>
       <td>Yöneticinin API bölümündeki gizli anahtarınız. Bu başlık olarak gönderilmelidir.</td>
      </tr>
       <tr>
       <td>hizmet_numarasi</td>
       <td>Bu, sunucularınızın benzersiz kimliğidir. Bunu, tüm özel sunucuları API üzerinden veya 1337.com.tr yöneticisinde bulunan URL çubuğuyla listeleyerek bulabilirsiniz..</td>
      </tr>

     <tbody>
 
   </table>

</div>
</div>
</div>
</div>






<script src='tasarim/site.js'></script>

<script>
   $('.selectpicker').selectpicker();
   $('[data-toggle="tooltip"]').tooltip();
   $("a[data-toggle='tooltip']").tooltip();
</script>

</html>    
