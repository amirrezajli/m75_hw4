let text = "learn javascript"
function slc (text,number){
    let a = []
    text = text.split(" ").join("")
    for(let i=0;i<text.length;i+=number){
        let s="";
        for(let j =0;j<number;j++){
            if(i+j < text.length) s+= text[i+j]
        }
        a.push(s)
    }
    return a
}

console.log(slc(text,2))
console.log(slc(text,3))