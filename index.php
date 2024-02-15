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
</head>
<body>
    <div class="main-div">
        <div class="container">
            <div class = "top-part">
                <img src="" alt="">
                <h3>Converter</h3>
            </div>
            <div class="worded-numbers-container">
                <p id=worded-numbers></p>
            </div>
            <div class="input-part">
                <input id="readNum" oninput="convertToNumWords()" type="number" placeholder="Number" value="" />
                <button id="clearNum" value="Clear" onclick="clearThis()">Clear</button>    
            </div>
        </div>
    </div>
    <!-- <h1>Convert</h1> -->
    <!-- <div  class= "container">
        <input id="readNum" oninput="convertToNumWords()" type="number" placeholder="Number" value="" />
        <div class="worded-numbers-container">
            <p id=worded-numbers></p>
        </div>
        <button id="clearNum" value="Clear" onclick="clearThis()">Clear</button>
    </div> -->
</body>
<script src="./js/index.js">
</script>
</html>