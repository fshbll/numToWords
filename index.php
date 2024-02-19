<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number to Number Words</title>
    <link rel="stylesheet" href="./css/style.css"> 
    <link rel="stylesheet" href="./icons/css/fontawesome.css">
    <link rel="stylesheet" href="./icons/css/solid.css">
    <script src="./js/converter.js"></script>
    <script src="js/jquery-3.7.1.min.js"></script>
</head>
<body>     
    <div class="main-div">   
        <div class = "top-part">
            <h1 class=title>Cheque App</h1>
            <h3><i class="fa-solid fa-rotate fa-2xl"></i></h3>
        </div>
        <div class="converter-container">
            <div class="history-container">
            </div>
            <div class="input-part">
                <form method='post' name='sendform'>
                    <input id="readNum" type="number" placeholder="Enter a number" value="" />
                    <button id="delete-history" type="button"><i class="fa-solid fa-trash fa-xl" style="color: white;"></i></button>
                    <button id="submitNum" type="button">Convert</button>
                </form>    
            </div>
        </div>
    </div>
</body>
<script src="./js/index.js"></script>
</html>