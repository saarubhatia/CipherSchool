function specialReverse(str, word) {
        var strsplit=str.toLowerCase().split(' ');
        for(var i=0; i<strsplit.length;i++){
            if(strsplit[i].startsWith(word)){
               var rev= strsplit[i].split("").reverse().join("");
               strsplit.splice(i,1,rev);
            }
        }
       str = strsplit.join(' ');
       console.log(str);

}

specialReverse ("first man to WaLK on the moon", "m");
specialReverse ("word searches are super fun", "s");
specialReverse ("peter piper picked pickled peppers", "p");