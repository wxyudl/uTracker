<?php
  if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
  } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
  } else {
    $ip = $_SERVER['REMOTE_ADDR'];
  }
  $vc = isset($_COOKIE['vc']) ? $_COOKIE['vc'] : 0;
  setcookie('ip', $ip);
  setcookie('uname', 'wxyu');
  setcookie('vc', $vc + 1);
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Tracker</title>
  </head>
  <body>
    <a href="#">wxyu</a>
    <br />
    <br />
    <br />
    <a style="display: block; text-align: center;" href="http://www.baidu.com">百度一下你就知道了</a>
    <button type="button" name="button">点击购买</button>
    <script type="text/javascript">
      var ipInfoObj = {};
      function ipInfo(d){
        ipInfoObj = d;
      }
    </script>
    <script type="text/javascript" src="http://ip-api.com/json/?callback=ipInfo"></script>
    <script type="text/javascript" src="../build/utracker.bundle.js"></script>
    <script type="text/javascript">
      ut('pageview', 'Rep_Page');
      ut('hotspots', 'Rep_Page');
      ut('event', 'Rep_Page');
    </script>
  </body>
</html>
