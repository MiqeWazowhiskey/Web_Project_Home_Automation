
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"  href="./styleLogin.css">
  <script src="https://kit.fontawesome.com/5dd92a6a44.js" crossorigin="anonymous"></script>

</head>
<body>
  
    <div id="head" >
      <div class="logoClass">
              <i class="fa-brands fa-fort-awesome"></i>
              <h2 class="logo">AutoMaison</h2>
          </div>
          
    </div>
   
     <form class="form" action="login.php" method="post">

      <h2>LOGIN</h2>
    
      <label>User Name</label>
      <input type="text" name="username" placeholder="User Name"><br>

      <label>Password</label>
      <input type="password" name="password" placeholder="Password"><br>

      <input class="button" type="submit" name="submit" value="Log In">
     </form>
     
  
  <?php
    $producers = ["kerem","kagan"];
    $producerPasswords = ["123","456"];
    $consumers = ["kerem2","kagan2"];
    $consumerPasswords = ["345","567"]; 
    $user = false;
    $errormessage="";
    
    echo "<script>localStorage.setItem('user', false)</script>";

    if(isset($_POST["submit"])){
      $username = $_POST['username'];
      $password = $_POST['password'];
      
      
        if($password == $producerPasswords[0] && $username == $producers[0] || $password == $producerPasswords[1] && $username == $producers[1]){
          echo "<script>localStorage.setItem('user', true)</script>";
          echo "<script>window.location.href='./src/producer.html'</script>";
          exit();
        }
        else if($password == $consumerPasswords[0] && $username == $consumers[0] || $password == $consumerPasswords[1] && $username == $consumers[1]){
          echo "<script>localStorage.setItem('user', true)</script>";
          echo "<script>window.location.href='./src/consumer.html'</script>";
          exit();
        }
        else if($username == "" && $password == ""){
           echo "<div class='error'>Please enter username and password.</div>";
          exit();


        }
        else{
          echo "<div class='error'>Check for username or password.</div>";
          exit();


        }  
      }
    
  ?>
</body>
</html>