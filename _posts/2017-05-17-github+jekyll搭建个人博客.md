---
layout: post
title:  "github+jekyll搭建个人博客"
date:   2017-03-07 22:26:00
category: github
---

　　github Pages可以被认为是用户编写的、托管在github上的静态网页。jekyll是一个静态站点生成器，它会根据网页源码生成静态文件。两者结合的思路是，先在本地编写符合Jekyll规范的网站源码，然后上传到github，由github生成并托管整个网站。这样做的好处是，我们可以尽情享受git的版本管理功能，专注于写文章其它的都交给github处理。不足的是，它只能生成静态网页，没有用到数据库，不适合大型网站。

　　以下操作都基于windows。

### 本地搭建Jekyll
1.　安装ruby

[下载](http://rubyinstaller.org/downloads/)相应的版本，点击下载包安装。在安装界面记得勾选"Add Ruby executables to your PATH"，把ruby加入到系统的环境变量中，然后点击安装即可。

<img src="{{site.baseurl}}/source/2017-05-17/01.png">

安装完毕后在cmd输入：

	ruby -v

出现ruby版本号，则表示安装成功。

2.　安装DevKit

（1）[下载](http://rubyinstaller.org/downloads/)相应的版本。

（2）双击解压

（3）在cmd中cd到解压目录，执行如下命令：

	ruby dk.rb init

（4）打开config.yml，于末尾添加新的一行: “- C:/Ruby22”，这里的目录为ruby的安装目录

（5）执行如下命令：

	ruby dk.rb install

3.　安装jekyll

（1）确保 gem 已经正确安装，在cmd输入：

	gem -v

出现gem版本号，则表示安装成功。

（2）执行如下命令：

	gem install jekyll
	
安装jekyll时遇到的错误：

	ERROR:  Could not find a valid gem 'jekyll' (>= 0) in any repository

解决办法：

	gem sources --remove http://rubygems.org/
	gem sources -a https://gems.ruby-china.org/
	gem sources -l
	gem install rack 
	gem install jekyll
 
在国内使用默认的gem源会有问题，需要重新配置gem源。推荐使用[ruby-china](https://gems.ruby-china.org/)。

### Jekyll初始化博客

（1）git配置

	mkdir myBlog
	cd myBlog
	git init
	git checkout --orphan gh-pages　

git初始化，创建一个没有父节点的分支gh-pages，之后所有动作在此分支上完成。

（2）使用如下命令来创建博客：
	
	jekyll new myBlog

遇到的问题：

	Dependency Error: Yikes! It looks like you don't have bundler or one of its de
	pendencies installed. In order to use Jekyll as currently configured, you'll nee
	d to install this gem. The full error message from Ruby is: 'cannot load such fi
	le -- bundler' If you run into trouble, you can find helpful resources at http:/
	/jekyllrb.com/help/!

错误提示告诉我们没有安装bundler,在命令行中输入如下命令安装即可：

	gem install bundler

（3）创建完成后，输入如下命令启动服务：

	jekyll serve

这时遇到的问题是：

<img src="{{site.baseurl}}/source/2017-05-17/02.png">

安装wdm即可解决：

	gem install wdm	

到这一步，已经可以在浏览器中浏览博客了，浏览地址为：http://127.0.0.1:4000/

### 撰写博客

（1）先来了解jekyll基本的目录结构：

	├── _config.yml
	├── _includes
	|   ├── footer.html
	|   └── header.html
	├── _layouts
	|   ├── default.html
	|   └── post.html
	├── _posts
	|   ├── 2007-10-29-hello.md
	|   └── 2009-04-26-world.textile
	├── _site
	└── index.html

每部分的功能是：

_config.yml：保存配置数据。把配置写在这个文件里面，可以不用在命令行中写。

_includes：存放可复用的小模块。

_layouts：layouts是包裹在文章外部的模板。

_posts：存放博客文章。

_site：存放jekyll生成的页面，一般这个目录放进.gitignore文件中忽略它。

由目录结构可知，所有的文章都要放在_posts文件夹中。这些文件可以用Markdown编写，也可以用Textile格式编写。只要文件中有 YAML 头信息，它们就会从源格式转化成 HTML页面，从而成为你的静态网站的一部分

（2）撰写的博文的文件名

要严格遵循这样的格式：年-月-日-文章标题.文档格式，例如：

2017-05-17-github+jekyll搭建个人博客.md

（3）撰写博文的内容
所有博客文章顶部必须有一段 YAML头信息。在它下面，就可以选择你喜欢的格式来写文章。Jekyll 支持2种流行的标记语言格式： Markdown 和 Textile。

Markdown语法: [http://www.appinn.com/markdown/](http://www.appinn.com/markdown/)

### 提交到github

先运行jekyll serve通过浏览本地查看确认，没问题就可以提交到github。提交之前，记得创建一个.gitignore文件，把_site文件夹忽略掉。
之后通过[git](http://git.oschina.net/progit/)来提交代码：

	 git init
	 git symbolic-ref HEAD refs/heads/gh-pages
	 git add .
	 git commit -m "my blog"
	 git remote add origin https://github.com/username/jekyll_demo.git
	 git push origin gh-pages

上传成功之后，10分钟左右，访问http://username.github.com/jekyll_demo/就可以看到Blog已经生成了。

至此，一个简单的博客就搭建完成了。

友情链接：

[github pages 官网](https://pages.github.com/)

[git](http://www.bootcss.com/p/git-guide/)

[jekyll](http://jekyll.com.cn/)

[markdown](http://www.appinn.com/markdown/)
