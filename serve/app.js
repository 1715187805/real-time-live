const koa =require('koa');
const Router=require('koa-router');
const fs=require('fs');
const static =require('koa-static');
const bodyParser=require('koa-bodyparser');
const app=new koa();
const router=new Router();


app.use(bodyParser());
app.use(static('./public'));
app.use(router.routes());


app.listen(3000,()=>{
    console.log(new Date,'5000端口启动');
})

//node 推流
const NodeMediaServer = require('node-media-server');
    const config = {
        rtmp:{ port:4399,
            chunk_size:60000,
            gop_cache:true,
            ping:60,
            ping_timeout:30
        },
        http:{
            port:8001,
            allow_origin:'*'
        }
    };
    var nms =new NodeMediaServer(config);
    nms.run();

// nms.on('preConnect', (id, args) => {
//     console.log('1**********************')
//     console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
//     // let session = nms.getSession(id);
//     // session.reject();
// });
//
// nms.on('postConnect', (id, args) => {
//     console.log('2**********************')
//     console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
// });
//
// nms.on('doneConnect', (id, args) => {
//     console.log('3**********************')
//     console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
// });
//
// nms.on('prePublish', (id, StreamPath, args) => {
//     console.log('4**********************')
//     console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//     // let session = nms.getSession(id);
//     // session.reject();
// });
//
// nms.on('postPublish', (id, StreamPath, args) => {
//     console.log('5**********************')
//     console.log('[NodeEvent on postPublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
// });
//
// nms.on('donePublish', (id, StreamPath, args) => {
//     console.log('[NodeEvent on donePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
// });
//
// nms.on('prePlay', (id, StreamPath, args) => {
//     console.log('6**********************')
//     console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//     // let session = nms.getSession(id);
//     // session.reject();
// });
//
// nms.on('postPlay', (id, StreamPath, args) => {
//     console.log('7**********************')
//     console.log('[NodeEvent on postPlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
// });
//
// nms.on('donePlay', (id, StreamPath, args) => {
//     console.log('8**********************')
//     console.log('[NodeEvent on donePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
// });


