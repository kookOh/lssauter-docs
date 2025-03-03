/* eslint-disable no-console */
const fs = require('fs');
// FIXME: Incase you have the npm package
const HTMLtoDOCX = require('@turbodocx/html-to-docx');
// const HTMLtoDOCX = require('../dist/html-to-docx.umd');

const filePath = './example.docx';

const htmlString = `<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>backend documentation</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" type="image/x-icon" href="./images/favicon.ico">
	   <link rel="stylesheet" href="./styles/style.css">
        <link rel="stylesheet" href="./styles/dark.css">
    </head>
    <body>
          <script>
               // Blocking script to avoid flickering dark mode
               // Dark mode toggle button
               var useDark = window.matchMedia('(prefers-color-scheme: dark)');
               var darkModeState = useDark.matches;
               var $darkModeToggleSwitchers = document.querySelectorAll('.dark-mode-switch input');
               var $darkModeToggles = document.querySelectorAll('.dark-mode-switch');
               var darkModeStateLocal = localStorage.getItem('compodoc_darkmode-state');

               function checkToggle(check) {
                    for (var i = 0; i < $darkModeToggleSwitchers.length; i++) {
                         $darkModeToggleSwitchers[i].checked = check;
                    }
               }

               function toggleDarkMode(state) {
                    if (window.localStorage) {
                         localStorage.setItem('compodoc_darkmode-state', state);
                    }

                    checkToggle(state);

                    const hasClass = document.body.classList.contains('dark');

                    if (state) {
                         for (var i = 0; i < $darkModeToggles.length; i++) {
                              $darkModeToggles[i].classList.add('dark');
                         }
                         if (!hasClass) {
                              document.body.classList.add('dark');
                         }
                    } else {
                         for (var i = 0; i < $darkModeToggles.length; i++) {
                              $darkModeToggles[i].classList.remove('dark');
                         }
                         if (hasClass) {
                              document.body.classList.remove('dark');
                         }
                    }
               }

               useDark.addEventListener('change', function (evt) {
                    toggleDarkMode(evt.matches);
               });
               if (darkModeStateLocal) {
                    darkModeState = darkModeStateLocal === 'true';
               }
               toggleDarkMode(darkModeState);
          </script>

        <div class="navbar navbar-default navbar-fixed-top d-md-none p-0">
               <div class="d-flex">
                    <a href="./" class="navbar-brand">backend documentation</a>
                    <button type="button" class="btn btn-default btn-menu ion-ios-menu" id="btn-menu"></button>
               </div>
        </div>

        <div class="xs-menu menu" id="mobile-menu">
            <compodoc-menu></compodoc-menu>
        </div>

        <div class="container-fluid main">
           <div class="row main">
               <div class="d-none d-md-block menu">
                   <compodoc-menu mode="normal"></compodoc-menu>
               </div>
               <!-- START CONTENT -->
               <div class="content modules">
                   <div class="content-data">



<ol class="breadcrumb">
    <li class="breadcrumb-item">모듈</li>
</ol>
<div class="container-fluid modules">
    <div class="row">
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">AdminModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/AdminModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">AppModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/AppModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">AuthModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/AuthModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">BidModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/BidModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">DashboardModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/DashboardModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">DrModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/DrModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">HistoryModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/HistoryModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">InquiryModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/InquiryModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">KpxModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/KpxModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">ManagementModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/ManagementModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">MonitoringModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/MonitoringModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">PowerplannerModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/PowerplannerModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">PrismaModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/PrismaModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">ProfileModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/ProfileModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">RedisModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/RedisModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card card-module">
                    <div class="card-header">
                        <h4 class="card-title">UserModule</h4>
                    </div>
                    <div class="card-block">
                        <footer class="text-center">
                            <a href="./modules/UserModule.html" class="btn btn-default">탐색</a>
                        </footer>
                    </div>
                </div>
            </div>
    </div>
</div>


















                   </div><div class="search-results">
    <div class="has-results">
        <h1 class="search-results-title"><span class='search-results-count'></span> 개의 결과가 일치했습니다 "<span class='search-query'></span>"</h1>
        <ul class="search-results-list"></ul>
    </div>
    <div class="no-results">
        <h1 class="search-results-title">검색 결과가 없습니다 "<span class='search-query'></span>"</h1>
    </div>
</div>
</div>
               <!-- END CONTENT -->
           </div>
       </div>

          <label class="dark-mode-switch">
               <input type="checkbox">
               <span class="slider">
                    <svg class="slider-icon" viewBox="0 0 24 24" fill="none" height="20" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
               </span>
          </label>

       <script>
            var COMPODOC_CURRENT_PAGE_DEPTH = 0;
            var COMPODOC_CURRENT_PAGE_CONTEXT = 'modules';
            var COMPODOC_CURRENT_PAGE_URL = 'modules.html';
       </script>

       <script>
               $darkModeToggleSwitchers = document.querySelectorAll('.dark-mode-switch input');
               checkToggle(darkModeState);
               if ($darkModeToggleSwitchers.length > 0) {
                    for (var i = 0; i < $darkModeToggleSwitchers.length; i++) {
                         $darkModeToggleSwitchers[i].addEventListener('change', function (event) {
                              darkModeState = !darkModeState;
                              toggleDarkMode(darkModeState);
                         });
                    }
               }
          </script>

       <script src="./js/libs/custom-elements.min.js"></script>
       <script src="./js/libs/lit-html.js"></script>

       <script src="./js/menu-wc.js" defer></script>
       <script nomodule src="./js/menu-wc_es5.js" defer></script>

       <script src="./js/libs/bootstrap-native.js"></script>

       <script src="./js/libs/es6-shim.min.js"></script>
       <script src="./js/libs/EventDispatcher.js"></script>
       <script src="./js/libs/promise.min.js"></script>

       <script src="./js/compodoc.js"></script>

       <script src="./js/tabs.js"></script>
       <script src="./js/menu.js"></script>
       <script src="./js/libs/clipboard.min.js"></script>
       <script src="./js/libs/prism.js"></script>
       <script src="./js/sourceCode.js"></script>
       <script src="./js/lazy-load-graphs.js"></script>


    </body>
</html>
`;

(async () => {
  const fileBuffer = await HTMLtoDOCX(htmlString, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
    preprocessing: { skipHTMLMinify: false },
  });

  fs.writeFile(filePath, fileBuffer, (error) => {
    if (error) {
      console.log('Docx file creation failed');
      return;
    }
    console.log('Docx file created successfully');
  });
})();
