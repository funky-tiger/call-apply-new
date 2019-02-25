
Function.prototype.myCall = function(context){
    /** 1 如果没传上下文conntext 就取window为this 
     * 此处Object() 主要考虑到如果是String类型
    */
    context = context?Object(context):window;
    /** 2 改变this指向
     * this就是原函数 */
    context.fn = this;
    /** 3 取参数 注意从第二个开始取
     * 因为第一个是上下文context 也就是this
    */
    let args = [];
    for(let i = 1; i < arguments.length; i++){
        /** 4 这里传递的上字符串 因为待会要配合eval()使用 */
        args.push('arguments['+ i +']');
    }
    /** 5 把参数传递进去 eval()可以让字符串执行 */
    let r = eval('context.fn('+ args +')');
    /** 6 删除原context.fn */
    delete context.fn;
    /** 7 返回r */
    return r;
}


let str = 'str';

let obj = {
    name:'123'
};

function fn(){
    console.log(this);
}

fn.call(str);
fn.call(obj);

fn.myCall(str);
fn.myCall(obj);