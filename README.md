## template-react-web

web应用初始化模板

注意：需通过[edoc2-cli](https://github.com/edoc2Front/edoc2-cli)创建，该项目需要经过模板渲染之后才是正常结构

### 文件结构

<pre>
├─template
│  ├─config  # 配置文件
│  ├─mock    # mock数据
│  ├─public  # 配置文件
│  ├─src  # 配置文件 
│      ├─components # 组件
│      ├─layout     # layout
│      ├─models     # 全局model
│      ├─services   # 公共api
│      ├─utils      # 公共方法
│      └─pages      # 页面
│          ├─about  # about页面
│          └─index  # index页面
</pre>

可按照上图所示结构进行开发

### 支持功能

* 基于umi + dva + antd + scss....

* 部分demo

* 后续慢慢完善...


### 关键文件介绍

#### meta.js

模板的主要配置，其中包含了edoc2-cli中的问答部分`prompts`，文件可选过滤`filters`，生成文件前的最后方法（比如自动npm i）`complete`