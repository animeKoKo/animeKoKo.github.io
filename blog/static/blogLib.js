(function () {
  let rootPath=(()=>{

    if(window.location.hostname==='animekoko.github.io'){
      return './blog-lib'
    }else{
      return './static'
    }
  })();
  window.blogLib={
    rootPath,
    list:[
      {
        name:'测试',
        title:'测试标题',
        url:rootPath+'/'+'test2.md'
      },
      {
        name:'测试',
        title:'测试标题',
        url:rootPath+'/'+'test2.md'
      },
      {
        name:'测试',
        title:'测试标题',
        url:rootPath+'/'+'test2.md'
      },
      {
        name:'测试',
        title:'测试标题',
        url:rootPath+'/'+'test2.md'
      },
    ]
  }
})();
