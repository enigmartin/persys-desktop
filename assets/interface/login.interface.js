class LoginInterface extends I {
    static users() {};
    static login(hostCache) {
        I.containers();
        let id='login';
        if(!E.get(id)) {
            let login=E.div(body,'container',id);

            let loginBox=E.div(login,'','loginBox');
            let table=E.table(loginBox,'','','center','100%');
            E.img(E.tableC(E.tableR(table),''),'loginIcon','','device.png');
            E.div(E.tableC(E.tableR(table),''),'loginTitle','').innerHTML='Welcome to Persys';
            E.div(E.tableC(E.tableR(table),''),'loginBlurb','').innerHTML='Login with your passcode.';
            let host=E.input(E.tableC(E.tableR(table),'100%'),'text','loginField','','Device ID')
            if(hostCache) host.value=hostCache;
            let passcode=E.input(E.tableC(E.tableR(table),'100%'),'password','loginField','','Passcode')
            let button=E.button(E.tableC(E.tableR(table),'100%'),'loginButton','','Log in');

            button.onclick=()=>{
                send();
            }
            host.onkeydown=(e)=>{
                if(e.keyCode===13) send();
            };
            passcode.onkeydown=(e)=>{
                if(e.keyCode===13) send();
            };

            function send() {
                if(host.value && passcode.value) {
                    apiRoot=host.value;
                    apiUrl='http://'+apiRoot+':3000';
                    //
                    //
                    A.r('POST','/authenticate',{passcode:sha256_digest(passcode.value)},(error,data)=>{
                        if(!error) {
                            persys.setCookie({host:apiRoot,name:'host',value:apiRoot});
                            persys.setCookie({host:apiRoot,name:'publicToken',value:data});
                            persys.launch();
                        }
                        else I.error(error);
                    });
                }
                else {
                    if(!host.value) I.error('Host name is required');
                    if(!passcode.value) I.error('Passcode is required');
                }
            }
        }
        E.get(id).style.display='block';
    };
}