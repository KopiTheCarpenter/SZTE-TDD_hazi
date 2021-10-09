export class Greeter{
    greets(inputNames:String[]):String{
        if(inputNames.length ==0)return 'Hello, my friend.';
        if(inputNames.length ==1)return 'Hello, ' +inputNames[0]+'.';
        else {
            let ret:String ='Hello, ';
            for (let index = 0; index < inputNames.length-1; index++) {
                ret += inputNames[index] +', ';
            }
            ret +='and '+inputNames[inputNames.length-1]+'.';
            return ret;
        }
    }
}