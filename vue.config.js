// export default {
//     devServer:{
//         proxy:{
//             'api/':{
//                 target:'https://www.51tagger.com',
//                 changeOrigin:true
//             }
//         }
//     }
// }

const test =require('./data/test.json');//引入test.json
module.export = {
    devServer:{
        host:'loacalhost',
        proxy:{
            'api/':{
                target:'https://www.51tagger.com',
                changeOrigin:true
            }
        }
    },
    before(app){
        http://localhost:8081/test
        app.get('/test',(req,res)=>{
            res.json(test)
        })
    }
}
