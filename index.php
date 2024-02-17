<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number to Number Words</title>
    <link rel="stylesheet"; href="./css/style.css"> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link src="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
    <script src="./js/converter.js"></script>
    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="https://kit.fontawesome.com/7ce477846b.js" crossorigin="anonymous"></script>
</head>
<body>     
    <div class="main-div">   
        <div class="title-div">
            <div class="title-container">
                <h1 class=title>Convert Number to Words</h1>
            </div>
        </div> 
        <div class="converter-container">
            <div class = "top-part">
                <img src="" alt="">
                <h3><i class="fa-solid fa-rotate fa-2xl"></i></h3>
            </div>
            <div class="worded-numbers-container">
                <button id="copyNum" type="button" onclick="copyData()" style="display: none";><i class="fa-regular fa-clipboard fa-2xl" style="color: #265073;"></i></button>
                <p id=worded-numbers></p>
            </div>
            <div class="input-part">
                <form method='post' name='sendform'>
                    <input id="readNum" type="number" placeholder="Number" value="" />
                    <button id="submitNum" type="button" onclick="convertToNumWords()"><i class="fa-solid fa-circle-arrow-right fa-2xl" style="color: #265073;"></i></button>
                </form>    
            </div>
        </div>
        <div class="history-div">
            <div class = "top-part">
                <h3><i class="fa-solid fa-clock-rotate-left fa-2xl" style="color: white;"></i></h3>
            </div>
            <div class="worded-numbers-container">
                <button id="copyNum" type="button" onclick="copyData()" style="display: none";><i class="fa-regular fa-clipboard fa-2xl" style="color: #265073;"></i></button>
                <p id=worded-numbers></p>
            </div>
            <div class="input-part">
                <button id="delete-history"><i class="fa-solid fa-trash fa-2xl" style="color: #265073;"></i></button>
            </div>
        </div>
    </div>
</body>
<script src="./js/index.js"></script>
</html>