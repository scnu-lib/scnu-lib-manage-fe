# scnu-lib-manage-fe

This is for scnu lib management system frontend

# 目录结构

```
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
```

# 开发

```
yarn start
yarn build
```

## 页面代码结构开发约定

```
src
├── components
└── pages
    ├── Welcome        // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── components // 对于复杂的页面可以再自己做更深层次的组织，但建议不要超过三层
    |   ├── Form.tsx
    |   ├── index.tsx  // 页面组件的代码
    |   └── index.less // 页面样式
    ├── Order          // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── index.tsx
    |   └── index.less
    ├── User
    |   ├── components // group 下公用的组件集合
    |   ├── Login      // group 下的页面 Login
    |   ├── Register   // group 下的页面 Register
    |   └── util.ts    // 这里可以有一些共用方法之类，不做推荐和约束，看业务场景自行做组织
    └── *              // 其它页面组件代码
```

## git commit 约束

Proper commit message format is required for automated changelog generation. Examples:

    [`<emoji>`] [revert: ?]`<type>`[(scope)?]: `<message>`

    💥 feat(compiler): add 'comments' option

    🐛 fix(compiler): fix some bug

    📝 docs(compiler): add some docs

    🌷 UI(compiler): better styles

    🏰 chore(compiler): Made some changes to the scaffolding

    🌐 locale(compiler): Made a small contribution to internationalization

Other commit types: refactor, perf, workflow, build, CI, typos, tests, types, wip, release, dep

    See https://github.com/vuejs/core/blob/main/.github/commit-convention.md

> 参考：
>
> - https://pro.ant.design/zh-CN/docs/folder
> - https://github.com/vuejs/core/blob/main/.github/commit-convention.md
>
> 更多请看 https://pro.ant.design/zh-CN/docs/getting-started
