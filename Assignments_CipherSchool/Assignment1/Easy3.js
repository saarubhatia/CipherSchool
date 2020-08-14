var replaceVowels = (str)=> {
    var strsplit=strstr.toLowerCase().split('');
    for(var i=0; i<strsplit.length; i++){
        if(strsplit[i]==='a'){
            strsplit[i]=1;
        }
        else if(strsplit[i]==='e'){
            strsplit[i]=2;
        }
        else if(strsplit[i]==='i'){
            strsplit[i]=3;
        }
        else if(strsplit[i]==='o'){
            strsplit[i]=4;
        }
        else if(strsplit[i]==='u'){
            strsplit[i]=5;
        }
    }
   str= strsplit.join("");
   console.log(str);
}
replaceVowels('karachi');
replaceVowels("chembur");
replaceVowels("khandbari");
