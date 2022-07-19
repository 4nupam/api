const request = new XMLHttpRequest();
request.open("Get","https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json");
request.send();
request.onload=()=>{
    console.log(request);
}