
Function.prototype.myApply = function(context,args){
    /** 1 如果没传上下文conntext 就取window为this 
     * 此处Object() 主要考虑到如果是String类型
    */
    context = context?Object(context):window;
    /** 2 改变this指向
     * this就是原函数 */
    context.fn = this;
    /** 3 把参数传递进去 eval()可以让字符串执行 */
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

fn.apply(str);
fn.apply(obj);

fn.myApply(str);
fn.myApply(obj);