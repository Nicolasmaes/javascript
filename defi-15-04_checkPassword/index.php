<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Check Password</title>
  </head>
  <body>

    <form>
        <fieldset>
            <legend>Register:</legend>
            <label for="login">Login: </label>
            <input type="text" name="login"><br>
            <label for="password">Password: </label>
            <input type="text" name="password" id="password"><br>
            <label for="check-password">Re-enter your password: </label>
            <input type="text" name="check-password" id="check-password">
            <span id="alert"></span><br>
            <input type="button" value="Send">
        </fieldset>
    </form>

    <script type="text/javascript" src="main.js"></script>
  </body>
</html>