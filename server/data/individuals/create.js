export const individualCreateData = {
  template: `<!DOCTYPE html>
  <html lang='fr'>
    <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Create</title>
        <style>
            *,
            *::after,
            *::before {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            }
            body {
            min-height: 100vh;
            }
            .nav {
            width: 100vw;
            height: 80px;
            display: flex;
            align-items: center;
            background-color: antiquewhite;
            }
            .nav a {
            display: block;
            margin-left: 20px;
            }
            .content {
            padding: 30px;
            }
        </style>
        <!--production-scripts-->
        <!--production-links-->
    </head>
    <body>
        <div class="nav">
            <a href="https://hono-vue3.tschmutz.workers.dev/individuals/create"
            >=> Vue 3</a
            >
            <a href="https://mock-saas.vercel.app">=> SAAS</a>
        </div>
        <div class="content">
            <div id='app'>
                <!--ssr-outlet-->
            </div>
        </div>
        <script type='module' src='/src/entry-client.js'></script>
        <!--scripts-outlet-->
    </body>
</html>`,
  initialData: {
    corp: "Sellsy",
    account: "Gold",
    currency: [
      { country: "FR", value: "euro" },
      { country: "CA", value: "dollar" },
    ],
  },
  initialScripts: [
    '<script>console.log("script 1 from /vue3 route")</script>',
    '<script>console.log("script 2 from /vue3 route")</script>',
  ],
};
