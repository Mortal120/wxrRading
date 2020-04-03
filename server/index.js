const express = require('express')
const bodyParser= require("body-parser")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = 3000
//获取福利页面数据
app.get('/', (req, res) => res.json(
    {code:1,
    data:[
        {
            id:1,
            img:"/static/image/index4.png",
            title:"赠高校师生30天无限卡",
            subTitle:"凭借校园邮箱即可免费领取",
            text:"立即领取"
          },
            {
              id: 2,
              img: "/static/image/index1.png",
              title: "组队抽终身无限卡",
              subTitle: "第78期 03.28-04.04",
              text: "立即组队"
            },
            {
              id: 3,
              img: "/static/image/index2.png",
              title: "免费听书馆",
              subTitle: "第141期 03.24-03.31",
              text: "立即收听"
            },
            {
                id: 4,
                img: "/static/image/index1.png",
                title: "读书小队",
                subTitle: "3人成队伍，共攒积分兑大奖",
                text: "立即组队"
              },
    ]}
    ))
app.get('/api/category',(req,res,next)=>{
  res.json({
    code:0,
    data:[{
      id:1,
      data:[{
        imgUrl:"/static/image/0.jpg",
        name:"修真小道士",
        author:"门中马",
        grade:"8分",
        scribe:"根据《仙路争锋》推荐"
      },
      {
        imgUrl:"/static/image/1.jpg",
        name:"随身医典：医妃权倾天下",
        author:"阿耐",
        grade:"9分",
        scribe:"大家都在看"
      },
      {
        imgUrl:"/static/image/2.jpg",
        name:"随身医典：医妃权倾天下",
        author:"阿耐",
        grade:"9分",
        scribe:"大家都在看"
      },
      {
        imgUrl:"/static/image/3.jpg",
        name:"时短术",
        author:"日本生产性改革会议",
        grade:"7.5分",
        scribe:"大家都在看"
      },
      {
        imgUrl:"/static/image/4.jpg",
        name:"修真小道士",
        author:"门中马",
        grade:"8.5分",
        scribe:"根据《仙路争锋》推荐"
      },
      {
        imgUrl:"/static/image/5.jpg",
        name:"随身医典：医妃权倾天下",
        author:"阿耐",
        grade:"9.1分",
        scribe:"大家都在看"
      },
      {
        imgUrl:"/static/image/6.jpg",
        name:"随身医典：医妃权倾天下",
        author:"阿耐",
        grade:"9.1分",
        scribe:"大家都在看"
      }]
    },
    {
      id:2,
      data:[{
        imgUrl:"/static/image/4.jpg",
        name:"修真小道士",
        author:"门中马",
        grade:"8.5分",
        scribe:"根据《仙路争锋》推荐"
      },
      {
        imgUrl:"/static/image/6.jpg",
        name:"挪威的森林",
        author:"阿耐",
        grade:"9.1分",
        scribe:"大家都在看"
      },
      {
        imgUrl:"/static/image/8.jpg",
        name:"神医麻算子",
        author:"阿耐",
        grade:"9.1分",
        scribe:"大家都在看"
      },
      {
        imgUrl:"/static/image/6.jpg",
        name:"掌中之物",
        author:"阿耐",
        grade:"9分",
        scribe:"大家都在看"
      },
      {
        imgUrl:"/static/image/7.jpg",
        name:"追风筝的人",
        author:"阿耐",
        grade:"9.5分",
        scribe:"大家都在看"
      },
      {
        imgUrl:"/static/image/6.jpg",
        name:"荣耀王者",
        author:"阿耐",
        grade:"9.1分",
        scribe:"大家都在看"
      }]
    },
    {
      id:3,
      data:[{
        imgUrl:"/static/image/4.jpg",
        name:"修真小道士",
        author:"门中马",
        grade:"8.5分",
        scribe:"根据《仙路争锋》推荐"
      },
      {
        imgUrl:"/static/image/5.jpg",
        name:"随身医典：医妃权倾天下",
        author:"阿耐",
        grade:"9.1分",
        scribe:"大家都在看"
      },
      {
        imgUrl:"/static/image/6.jpg",
        name:"随身医典：医妃权倾天下",
        author:"阿耐",
        grade:"9.1分",
        scribe:"大家都在看"
      }]
    },
    {
      id:4,
      data:[{
        imgUrl:"/static/image/7.jpg",
        name:"明朝那些事",
        author:"当年明月",
        grade:"9.5分",
        scribe:"根据明朝那些事推荐"
      },
      {
        imgUrl:"/static/image/8.jpg",
        name:"OGER 3D游戏框架开发指南",
        author:"邸锐",
        grade:"9.1分",
        scribe:"根据《Unity 3D 完全自学教程》推荐"
      },
      {
        imgUrl:"/static/image/7.jpg",
        name:"vue企业开发",
        author:"小睿",
        grade:"7.5分",
        scribe:"根据《bootstrape》推荐"
      }]
    },
    {
      id:5,
      data:[]
    }
  ]
  })
})
      

app.listen(port, () => console.log(`Example app listening on port ${port}!`),()=>{
  console.log("服务器已经启动")
})