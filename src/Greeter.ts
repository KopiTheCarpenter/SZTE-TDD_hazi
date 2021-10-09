export class Greeter{
    private greetLowerCaseArray(inputNames:String[]):String{
        let ret:String ='Hello, ';
        for (let index = 0; index < inputNames.length-1; index++) {
            ret += inputNames[index] +', ';
        }
        if(inputNames.length>1) ret+='and ';
        ret +=inputNames[inputNames.length-1]+'.';
        return ret;
    }
    private greetUpperCaseArray(inputNames:String[]):String{
        let ret:String =' HELLO ';
        for (let index = 0; index < inputNames.length-1; index++) {
            ret += inputNames[index] +', ';
        }
        if(inputNames.length>1) ret+='AND ';
        ret +=inputNames[inputNames.length-1]+'!';
        return ret;
    }
    public greets(inputNames:String[]):String{
        if(inputNames.length ==0)return 'Hello, my friend.';
        if(inputNames.length ==1){
            if(inputNames[0].toUpperCase()==inputNames[0]){
                return 'HELLO ' +inputNames[0]+'!';   
            }
            else return this.greetLowerCaseArray(inputNames);
             
        }
        else{
            let upperCaseNames:String[] =[];
            let lowerCaseNames:String[] =[];
            inputNames.forEach(name => {
                if(name.toUpperCase() == name){
                    upperCaseNames.push(name);
                }
                else{
                    lowerCaseNames.push(name);
                }
            });
            let ret:String = this.greetLowerCaseArray(lowerCaseNames);
            if(upperCaseNames.length>0){
                ret+=' AND'+this.greetUpperCaseArray(upperCaseNames);
            }
            return ret;
        }
       
    }
}