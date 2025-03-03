'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="검색어 입력"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>시작하기</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>개요
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>의존성
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>속성
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">모듈</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-6d2f1c900fda54fa4127a2746be3a6b27f9377b685dc126c33471ee8bb0ca9db4c2244370dd1808b8ba6c0ff39fe2e887b85384be29921d9c997372574c8aebd"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-6d2f1c900fda54fa4127a2746be3a6b27f9377b685dc126c33471ee8bb0ca9db4c2244370dd1808b8ba6c0ff39fe2e887b85384be29921d9c997372574c8aebd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>컨트롤러</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-6d2f1c900fda54fa4127a2746be3a6b27f9377b685dc126c33471ee8bb0ca9db4c2244370dd1808b8ba6c0ff39fe2e887b85384be29921d9c997372574c8aebd"' :
                                            'id="xs-controllers-links-module-AdminModule-6d2f1c900fda54fa4127a2746be3a6b27f9377b685dc126c33471ee8bb0ca9db4c2244370dd1808b8ba6c0ff39fe2e887b85384be29921d9c997372574c8aebd"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-6d2f1c900fda54fa4127a2746be3a6b27f9377b685dc126c33471ee8bb0ca9db4c2244370dd1808b8ba6c0ff39fe2e887b85384be29921d9c997372574c8aebd"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-6d2f1c900fda54fa4127a2746be3a6b27f9377b685dc126c33471ee8bb0ca9db4c2244370dd1808b8ba6c0ff39fe2e887b85384be29921d9c997372574c8aebd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-6d2f1c900fda54fa4127a2746be3a6b27f9377b685dc126c33471ee8bb0ca9db4c2244370dd1808b8ba6c0ff39fe2e887b85384be29921d9c997372574c8aebd"' :
                                        'id="xs-injectables-links-module-AdminModule-6d2f1c900fda54fa4127a2746be3a6b27f9377b685dc126c33471ee8bb0ca9db4c2244370dd1808b8ba6c0ff39fe2e887b85384be29921d9c997372574c8aebd"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-da4e190397cd926942ab8d3dbd02c68e305e2ad2d13e6df84a7baf527fb694143e854a8a8bacd175e9a3f0b63f6770a9133ab78b63ba9bf8355a91c31fd9fb51"' : 'data-bs-target="#xs-controllers-links-module-AppModule-da4e190397cd926942ab8d3dbd02c68e305e2ad2d13e6df84a7baf527fb694143e854a8a8bacd175e9a3f0b63f6770a9133ab78b63ba9bf8355a91c31fd9fb51"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>컨트롤러</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-da4e190397cd926942ab8d3dbd02c68e305e2ad2d13e6df84a7baf527fb694143e854a8a8bacd175e9a3f0b63f6770a9133ab78b63ba9bf8355a91c31fd9fb51"' :
                                            'id="xs-controllers-links-module-AppModule-da4e190397cd926942ab8d3dbd02c68e305e2ad2d13e6df84a7baf527fb694143e854a8a8bacd175e9a3f0b63f6770a9133ab78b63ba9bf8355a91c31fd9fb51"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-da4e190397cd926942ab8d3dbd02c68e305e2ad2d13e6df84a7baf527fb694143e854a8a8bacd175e9a3f0b63f6770a9133ab78b63ba9bf8355a91c31fd9fb51"' : 'data-bs-target="#xs-injectables-links-module-AppModule-da4e190397cd926942ab8d3dbd02c68e305e2ad2d13e6df84a7baf527fb694143e854a8a8bacd175e9a3f0b63f6770a9133ab78b63ba9bf8355a91c31fd9fb51"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-da4e190397cd926942ab8d3dbd02c68e305e2ad2d13e6df84a7baf527fb694143e854a8a8bacd175e9a3f0b63f6770a9133ab78b63ba9bf8355a91c31fd9fb51"' :
                                        'id="xs-injectables-links-module-AppModule-da4e190397cd926942ab8d3dbd02c68e305e2ad2d13e6df84a7baf527fb694143e854a8a8bacd175e9a3f0b63f6770a9133ab78b63ba9bf8355a91c31fd9fb51"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-c99d831cda42a85fa2ff9586ced748a12a1f0a3fe0034331dce6d82f26a92b2962961840d76f1c772dca50b2df33e77b5c0a4244efabee423dac65fb97564932"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-c99d831cda42a85fa2ff9586ced748a12a1f0a3fe0034331dce6d82f26a92b2962961840d76f1c772dca50b2df33e77b5c0a4244efabee423dac65fb97564932"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>컨트롤러</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c99d831cda42a85fa2ff9586ced748a12a1f0a3fe0034331dce6d82f26a92b2962961840d76f1c772dca50b2df33e77b5c0a4244efabee423dac65fb97564932"' :
                                            'id="xs-controllers-links-module-AuthModule-c99d831cda42a85fa2ff9586ced748a12a1f0a3fe0034331dce6d82f26a92b2962961840d76f1c772dca50b2df33e77b5c0a4244efabee423dac65fb97564932"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-c99d831cda42a85fa2ff9586ced748a12a1f0a3fe0034331dce6d82f26a92b2962961840d76f1c772dca50b2df33e77b5c0a4244efabee423dac65fb97564932"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-c99d831cda42a85fa2ff9586ced748a12a1f0a3fe0034331dce6d82f26a92b2962961840d76f1c772dca50b2df33e77b5c0a4244efabee423dac65fb97564932"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c99d831cda42a85fa2ff9586ced748a12a1f0a3fe0034331dce6d82f26a92b2962961840d76f1c772dca50b2df33e77b5c0a4244efabee423dac65fb97564932"' :
                                        'id="xs-injectables-links-module-AuthModule-c99d831cda42a85fa2ff9586ced748a12a1f0a3fe0034331dce6d82f26a92b2962961840d76f1c772dca50b2df33e77b5c0a4244efabee423dac65fb97564932"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BidModule.html" data-type="entity-link" >BidModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BidModule-315b44c4f2b45dce81ae3e055775122251d895c130c671ee44c3a2728cdb1f6f353d64c0d2fa2a6e4d0e47885d8878a97b8034250bc799cd6d1cbc9f43264d73"' : 'data-bs-target="#xs-controllers-links-module-BidModule-315b44c4f2b45dce81ae3e055775122251d895c130c671ee44c3a2728cdb1f6f353d64c0d2fa2a6e4d0e47885d8878a97b8034250bc799cd6d1cbc9f43264d73"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>컨트롤러</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BidModule-315b44c4f2b45dce81ae3e055775122251d895c130c671ee44c3a2728cdb1f6f353d64c0d2fa2a6e4d0e47885d8878a97b8034250bc799cd6d1cbc9f43264d73"' :
                                            'id="xs-controllers-links-module-BidModule-315b44c4f2b45dce81ae3e055775122251d895c130c671ee44c3a2728cdb1f6f353d64c0d2fa2a6e4d0e47885d8878a97b8034250bc799cd6d1cbc9f43264d73"' }>
                                            <li class="link">
                                                <a href="controllers/BidController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BidController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BidModule-315b44c4f2b45dce81ae3e055775122251d895c130c671ee44c3a2728cdb1f6f353d64c0d2fa2a6e4d0e47885d8878a97b8034250bc799cd6d1cbc9f43264d73"' : 'data-bs-target="#xs-injectables-links-module-BidModule-315b44c4f2b45dce81ae3e055775122251d895c130c671ee44c3a2728cdb1f6f353d64c0d2fa2a6e4d0e47885d8878a97b8034250bc799cd6d1cbc9f43264d73"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BidModule-315b44c4f2b45dce81ae3e055775122251d895c130c671ee44c3a2728cdb1f6f353d64c0d2fa2a6e4d0e47885d8878a97b8034250bc799cd6d1cbc9f43264d73"' :
                                        'id="xs-injectables-links-module-BidModule-315b44c4f2b45dce81ae3e055775122251d895c130c671ee44c3a2728cdb1f6f353d64c0d2fa2a6e4d0e47885d8878a97b8034250bc799cd6d1cbc9f43264d73"' }>
                                        <li class="link">
                                            <a href="injectables/BidService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BidService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DashboardModule-5bb15a1e7d55b09cad1253e9f6ac19d119db3e7bd901282316bf585c4209de043ce9899c0e1e29ab3fcbbd9133d40b55546b9ca84ab941a808559b18cac28f04"' : 'data-bs-target="#xs-controllers-links-module-DashboardModule-5bb15a1e7d55b09cad1253e9f6ac19d119db3e7bd901282316bf585c4209de043ce9899c0e1e29ab3fcbbd9133d40b55546b9ca84ab941a808559b18cac28f04"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>컨트롤러</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DashboardModule-5bb15a1e7d55b09cad1253e9f6ac19d119db3e7bd901282316bf585c4209de043ce9899c0e1e29ab3fcbbd9133d40b55546b9ca84ab941a808559b18cac28f04"' :
                                            'id="xs-controllers-links-module-DashboardModule-5bb15a1e7d55b09cad1253e9f6ac19d119db3e7bd901282316bf585c4209de043ce9899c0e1e29ab3fcbbd9133d40b55546b9ca84ab941a808559b18cac28f04"' }>
                                            <li class="link">
                                                <a href="controllers/DashboardController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DashboardModule-5bb15a1e7d55b09cad1253e9f6ac19d119db3e7bd901282316bf585c4209de043ce9899c0e1e29ab3fcbbd9133d40b55546b9ca84ab941a808559b18cac28f04"' : 'data-bs-target="#xs-injectables-links-module-DashboardModule-5bb15a1e7d55b09cad1253e9f6ac19d119db3e7bd901282316bf585c4209de043ce9899c0e1e29ab3fcbbd9133d40b55546b9ca84ab941a808559b18cac28f04"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DashboardModule-5bb15a1e7d55b09cad1253e9f6ac19d119db3e7bd901282316bf585c4209de043ce9899c0e1e29ab3fcbbd9133d40b55546b9ca84ab941a808559b18cac28f04"' :
                                        'id="xs-injectables-links-module-DashboardModule-5bb15a1e7d55b09cad1253e9f6ac19d119db3e7bd901282316bf585c4209de043ce9899c0e1e29ab3fcbbd9133d40b55546b9ca84ab941a808559b18cac28f04"' }>
                                        <li class="link">
                                            <a href="injectables/DashboardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DrModule.html" data-type="entity-link" >DrModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DrModule-c89a7afc9be35edaadeac4ebc69e503f39ba5f264d5684ae5f77663c2ebb8c4d96499250149651009a0ee54db3c091bbf503e820cc93c3c177b84a40ff2619ec"' : 'data-bs-target="#xs-controllers-links-module-DrModule-c89a7afc9be35edaadeac4ebc69e503f39ba5f264d5684ae5f77663c2ebb8c4d96499250149651009a0ee54db3c091bbf503e820cc93c3c177b84a40ff2619ec"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>컨트롤러</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DrModule-c89a7afc9be35edaadeac4ebc69e503f39ba5f264d5684ae5f77663c2ebb8c4d96499250149651009a0ee54db3c091bbf503e820cc93c3c177b84a40ff2619ec"' :
                                            'id="xs-controllers-links-module-DrModule-c89a7afc9be35edaadeac4ebc69e503f39ba5f264d5684ae5f77663c2ebb8c4d96499250149651009a0ee54db3c091bbf503e820cc93c3c177b84a40ff2619ec"' }>
                                            <li class="link">
                                                <a href="controllers/DrController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DrController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DrModule-c89a7afc9be35edaadeac4ebc69e503f39ba5f264d5684ae5f77663c2ebb8c4d96499250149651009a0ee54db3c091bbf503e820cc93c3c177b84a40ff2619ec"' : 'data-bs-target="#xs-injectables-links-module-DrModule-c89a7afc9be35edaadeac4ebc69e503f39ba5f264d5684ae5f77663c2ebb8c4d96499250149651009a0ee54db3c091bbf503e820cc93c3c177b84a40ff2619ec"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DrModule-c89a7afc9be35edaadeac4ebc69e503f39ba5f264d5684ae5f77663c2ebb8c4d96499250149651009a0ee54db3c091bbf503e820cc93c3c177b84a40ff2619ec"' :
                                        'id="xs-injectables-links-module-DrModule-c89a7afc9be35edaadeac4ebc69e503f39ba5f264d5684ae5f77663c2ebb8c4d96499250149651009a0ee54db3c091bbf503e820cc93c3c177b84a40ff2619ec"' }>
                                        <li class="link">
                                            <a href="injectables/DrService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DrService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistoryModule.html" data-type="entity-link" >HistoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HistoryModule-7d2315637a0b6c5d9cca499776fb6ab153f651b6de3abf6d442ce36d64c7aaf68b3da3d55cc4d23588ccdf04bb63cc7597f8af0720f10c9dd8a496816fbb8702"' : 'data-bs-target="#xs-controllers-links-module-HistoryModule-7d2315637a0b6c5d9cca499776fb6ab153f651b6de3abf6d442ce36d64c7aaf68b3da3d55cc4d23588ccdf04bb63cc7597f8af0720f10c9dd8a496816fbb8702"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>컨트롤러</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HistoryModule-7d2315637a0b6c5d9cca499776fb6ab153f651b6de3abf6d442ce36d64c7aaf68b3da3d55cc4d23588ccdf04bb63cc7597f8af0720f10c9dd8a496816fbb8702"' :
                                            'id="xs-controllers-links-module-HistoryModule-7d2315637a0b6c5d9cca499776fb6ab153f651b6de3abf6d442ce36d64c7aaf68b3da3d55cc4d23588ccdf04bb63cc7597f8af0720f10c9dd8a496816fbb8702"' }>
                                            <li class="link">
                                                <a href="controllers/HistoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HistoryModule-7d2315637a0b6c5d9cca499776fb6ab153f651b6de3abf6d442ce36d64c7aaf68b3da3d55cc4d23588ccdf04bb63cc7597f8af0720f10c9dd8a496816fbb8702"' : 'data-bs-target="#xs-injectables-links-module-HistoryModule-7d2315637a0b6c5d9cca499776fb6ab153f651b6de3abf6d442ce36d64c7aaf68b3da3d55cc4d23588ccdf04bb63cc7597f8af0720f10c9dd8a496816fbb8702"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HistoryModule-7d2315637a0b6c5d9cca499776fb6ab153f651b6de3abf6d442ce36d64c7aaf68b3da3d55cc4d23588ccdf04bb63cc7597f8af0720f10c9dd8a496816fbb8702"' :
                                        'id="xs-injectables-links-module-HistoryModule-7d2315637a0b6c5d9cca499776fb6ab153f651b6de3abf6d442ce36d64c7aaf68b3da3d55cc4d23588ccdf04bb63cc7597f8af0720f10c9dd8a496816fbb8702"' }>
                                        <li class="link">
                                            <a href="injectables/HistoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InquiryModule.html" data-type="entity-link" >InquiryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-InquiryModule-9614fbe5c4e69661e4a5a64c78f3accad9d6e0071eeacd51b50f3629812c17b4859ea3ecb8a6fb7400c0b16770568b5790ec04948aac6c7fe9a1d2cdb96d47eb"' : 'data-bs-target="#xs-controllers-links-module-InquiryModule-9614fbe5c4e69661e4a5a64c78f3accad9d6e0071eeacd51b50f3629812c17b4859ea3ecb8a6fb7400c0b16770568b5790ec04948aac6c7fe9a1d2cdb96d47eb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>컨트롤러</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InquiryModule-9614fbe5c4e69661e4a5a64c78f3accad9d6e0071eeacd51b50f3629812c17b4859ea3ecb8a6fb7400c0b16770568b5790ec04948aac6c7fe9a1d2cdb96d47eb"' :
                                            'id="xs-controllers-links-module-InquiryModule-9614fbe5c4e69661e4a5a64c78f3accad9d6e0071eeacd51b50f3629812c17b4859ea3ecb8a6fb7400c0b16770568b5790ec04948aac6c7fe9a1d2cdb96d47eb"' }>
                                            <li class="link">
                                                <a href="controllers/InquiryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InquiryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InquiryModule-9614fbe5c4e69661e4a5a64c78f3accad9d6e0071eeacd51b50f3629812c17b4859ea3ecb8a6fb7400c0b16770568b5790ec04948aac6c7fe9a1d2cdb96d47eb"' : 'data-bs-target="#xs-injectables-links-module-InquiryModule-9614fbe5c4e69661e4a5a64c78f3accad9d6e0071eeacd51b50f3629812c17b4859ea3ecb8a6fb7400c0b16770568b5790ec04948aac6c7fe9a1d2cdb96d47eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InquiryModule-9614fbe5c4e69661e4a5a64c78f3accad9d6e0071eeacd51b50f3629812c17b4859ea3ecb8a6fb7400c0b16770568b5790ec04948aac6c7fe9a1d2cdb96d47eb"' :
                                        'id="xs-injectables-links-module-InquiryModule-9614fbe5c4e69661e4a5a64c78f3accad9d6e0071eeacd51b50f3629812c17b4859ea3ecb8a6fb7400c0b16770568b5790ec04948aac6c7fe9a1d2cdb96d47eb"' }>
                                        <li class="link">
                                            <a href="injectables/InquiryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InquiryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/KpxModule.html" data-type="entity-link" >KpxModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ManagementModule.html" data-type="entity-link" >ManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ManagementModule-54459d71fb3c9edbc9b0d22fa2cff9f65264444378e09dcc1a6283abcec65abf312ee9f2d956f8f4f66762ccf8c3e75dae3a8859bcaa93c640be2b9560cf5ec0"' : 'data-bs-target="#xs-controllers-links-module-ManagementModule-54459d71fb3c9edbc9b0d22fa2cff9f65264444378e09dcc1a6283abcec65abf312ee9f2d956f8f4f66762ccf8c3e75dae3a8859bcaa93c640be2b9560cf5ec0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>컨트롤러</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ManagementModule-54459d71fb3c9edbc9b0d22fa2cff9f65264444378e09dcc1a6283abcec65abf312ee9f2d956f8f4f66762ccf8c3e75dae3a8859bcaa93c640be2b9560cf5ec0"' :
                                            'id="xs-controllers-links-module-ManagementModule-54459d71fb3c9edbc9b0d22fa2cff9f65264444378e09dcc1a6283abcec65abf312ee9f2d956f8f4f66762ccf8c3e75dae3a8859bcaa93c640be2b9560cf5ec0"' }>
                                            <li class="link">
                                                <a href="controllers/ManagementController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManagementController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ManagementModule-54459d71fb3c9edbc9b0d22fa2cff9f65264444378e09dcc1a6283abcec65abf312ee9f2d956f8f4f66762ccf8c3e75dae3a8859bcaa93c640be2b9560cf5ec0"' : 'data-bs-target="#xs-injectables-links-module-ManagementModule-54459d71fb3c9edbc9b0d22fa2cff9f65264444378e09dcc1a6283abcec65abf312ee9f2d956f8f4f66762ccf8c3e75dae3a8859bcaa93c640be2b9560cf5ec0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ManagementModule-54459d71fb3c9edbc9b0d22fa2cff9f65264444378e09dcc1a6283abcec65abf312ee9f2d956f8f4f66762ccf8c3e75dae3a8859bcaa93c640be2b9560cf5ec0"' :
                                        'id="xs-injectables-links-module-ManagementModule-54459d71fb3c9edbc9b0d22fa2cff9f65264444378e09dcc1a6283abcec65abf312ee9f2d956f8f4f66762ccf8c3e75dae3a8859bcaa93c640be2b9560cf5ec0"' }>
                                        <li class="link">
                                            <a href="injectables/ManagementService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManagementService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MonitoringModule.html" data-type="entity-link" >MonitoringModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MonitoringModule-169b3fa9982b50ea741f625d255113ddf248733dab801b75424033ccc42891a298b9f2f627e6d5e4910d45c6ecbea81b1c5d6bbdf805ce52fe2a3047ce4e1d0b"' : 'data-bs-target="#xs-controllers-links-module-MonitoringModule-169b3fa9982b50ea741f625d255113ddf248733dab801b75424033ccc42891a298b9f2f627e6d5e4910d45c6ecbea81b1c5d6bbdf805ce52fe2a3047ce4e1d0b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>컨트롤러</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MonitoringModule-169b3fa9982b50ea741f625d255113ddf248733dab801b75424033ccc42891a298b9f2f627e6d5e4910d45c6ecbea81b1c5d6bbdf805ce52fe2a3047ce4e1d0b"' :
                                            'id="xs-controllers-links-module-MonitoringModule-169b3fa9982b50ea741f625d255113ddf248733dab801b75424033ccc42891a298b9f2f627e6d5e4910d45c6ecbea81b1c5d6bbdf805ce52fe2a3047ce4e1d0b"' }>
                                            <li class="link">
                                                <a href="controllers/MonitoringController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonitoringController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MonitoringModule-169b3fa9982b50ea741f625d255113ddf248733dab801b75424033ccc42891a298b9f2f627e6d5e4910d45c6ecbea81b1c5d6bbdf805ce52fe2a3047ce4e1d0b"' : 'data-bs-target="#xs-injectables-links-module-MonitoringModule-169b3fa9982b50ea741f625d255113ddf248733dab801b75424033ccc42891a298b9f2f627e6d5e4910d45c6ecbea81b1c5d6bbdf805ce52fe2a3047ce4e1d0b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MonitoringModule-169b3fa9982b50ea741f625d255113ddf248733dab801b75424033ccc42891a298b9f2f627e6d5e4910d45c6ecbea81b1c5d6bbdf805ce52fe2a3047ce4e1d0b"' :
                                        'id="xs-injectables-links-module-MonitoringModule-169b3fa9982b50ea741f625d255113ddf248733dab801b75424033ccc42891a298b9f2f627e6d5e4910d45c6ecbea81b1c5d6bbdf805ce52fe2a3047ce4e1d0b"' }>
                                        <li class="link">
                                            <a href="injectables/MonitoringService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonitoringService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PowerplannerModule.html" data-type="entity-link" >PowerplannerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PowerplannerModule-d30f780683dfffe469a716854ccdc7268145f456bb4d380d58e542aa3f5fe3ceea8b87cf922901c5dad975f03cf27fb3d2ffe30f1751e4bf70181d578629ce2b"' : 'data-bs-target="#xs-injectables-links-module-PowerplannerModule-d30f780683dfffe469a716854ccdc7268145f456bb4d380d58e542aa3f5fe3ceea8b87cf922901c5dad975f03cf27fb3d2ffe30f1751e4bf70181d578629ce2b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PowerplannerModule-d30f780683dfffe469a716854ccdc7268145f456bb4d380d58e542aa3f5fe3ceea8b87cf922901c5dad975f03cf27fb3d2ffe30f1751e4bf70181d578629ce2b"' :
                                        'id="xs-injectables-links-module-PowerplannerModule-d30f780683dfffe469a716854ccdc7268145f456bb4d380d58e542aa3f5fe3ceea8b87cf922901c5dad975f03cf27fb3d2ffe30f1751e4bf70181d578629ce2b"' }>
                                        <li class="link">
                                            <a href="injectables/PowerplannerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PowerplannerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProfileModule-e4e325415d2cbd91da777b705964fb2ace8ce339cedcfb5d02bf8c694834337e1f08f0be14af1c36a579078e37e1014b1d93b52bac80c8934a1966b57507ab09"' : 'data-bs-target="#xs-controllers-links-module-ProfileModule-e4e325415d2cbd91da777b705964fb2ace8ce339cedcfb5d02bf8c694834337e1f08f0be14af1c36a579078e37e1014b1d93b52bac80c8934a1966b57507ab09"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>컨트롤러</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-e4e325415d2cbd91da777b705964fb2ace8ce339cedcfb5d02bf8c694834337e1f08f0be14af1c36a579078e37e1014b1d93b52bac80c8934a1966b57507ab09"' :
                                            'id="xs-controllers-links-module-ProfileModule-e4e325415d2cbd91da777b705964fb2ace8ce339cedcfb5d02bf8c694834337e1f08f0be14af1c36a579078e37e1014b1d93b52bac80c8934a1966b57507ab09"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProfileModule-e4e325415d2cbd91da777b705964fb2ace8ce339cedcfb5d02bf8c694834337e1f08f0be14af1c36a579078e37e1014b1d93b52bac80c8934a1966b57507ab09"' : 'data-bs-target="#xs-injectables-links-module-ProfileModule-e4e325415d2cbd91da777b705964fb2ace8ce339cedcfb5d02bf8c694834337e1f08f0be14af1c36a579078e37e1014b1d93b52bac80c8934a1966b57507ab09"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-e4e325415d2cbd91da777b705964fb2ace8ce339cedcfb5d02bf8c694834337e1f08f0be14af1c36a579078e37e1014b1d93b52bac80c8934a1966b57507ab09"' :
                                        'id="xs-injectables-links-module-ProfileModule-e4e325415d2cbd91da777b705964fb2ace8ce339cedcfb5d02bf8c694834337e1f08f0be14af1c36a579078e37e1014b1d93b52bac80c8934a1966b57507ab09"' }>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RedisModule.html" data-type="entity-link" >RedisModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RedisModule-a7abac9d76431dcfd426f0c20b4e48547345953729676d1a39e31c655820ea50cdc8032444057a9a055e7039dda01577f64ca14a6a9e1612ec29fd5dfea7b9af"' : 'data-bs-target="#xs-injectables-links-module-RedisModule-a7abac9d76431dcfd426f0c20b4e48547345953729676d1a39e31c655820ea50cdc8032444057a9a055e7039dda01577f64ca14a6a9e1612ec29fd5dfea7b9af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RedisModule-a7abac9d76431dcfd426f0c20b4e48547345953729676d1a39e31c655820ea50cdc8032444057a9a055e7039dda01577f64ca14a6a9e1612ec29fd5dfea7b9af"' :
                                        'id="xs-injectables-links-module-RedisModule-a7abac9d76431dcfd426f0c20b4e48547345953729676d1a39e31c655820ea50cdc8032444057a9a055e7039dda01577f64ca14a6a9e1612ec29fd5dfea7b9af"' }>
                                        <li class="link">
                                            <a href="injectables/RedisService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RedisService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-62fcfd3e5f6b010d5aec8dd2952cf634ab0123102faa7b9987e1cd4508d76cd0ab62f8bb37f086bb51897da112032f5c8928cd16aafd9972a5ffa77118cac4d8"' : 'data-bs-target="#xs-controllers-links-module-UserModule-62fcfd3e5f6b010d5aec8dd2952cf634ab0123102faa7b9987e1cd4508d76cd0ab62f8bb37f086bb51897da112032f5c8928cd16aafd9972a5ffa77118cac4d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>컨트롤러</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-62fcfd3e5f6b010d5aec8dd2952cf634ab0123102faa7b9987e1cd4508d76cd0ab62f8bb37f086bb51897da112032f5c8928cd16aafd9972a5ffa77118cac4d8"' :
                                            'id="xs-controllers-links-module-UserModule-62fcfd3e5f6b010d5aec8dd2952cf634ab0123102faa7b9987e1cd4508d76cd0ab62f8bb37f086bb51897da112032f5c8928cd16aafd9972a5ffa77118cac4d8"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-62fcfd3e5f6b010d5aec8dd2952cf634ab0123102faa7b9987e1cd4508d76cd0ab62f8bb37f086bb51897da112032f5c8928cd16aafd9972a5ffa77118cac4d8"' : 'data-bs-target="#xs-injectables-links-module-UserModule-62fcfd3e5f6b010d5aec8dd2952cf634ab0123102faa7b9987e1cd4508d76cd0ab62f8bb37f086bb51897da112032f5c8928cd16aafd9972a5ffa77118cac4d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-62fcfd3e5f6b010d5aec8dd2952cf634ab0123102faa7b9987e1cd4508d76cd0ab62f8bb37f086bb51897da112032f5c8928cd16aafd9972a5ffa77118cac4d8"' :
                                        'id="xs-injectables-links-module-UserModule-62fcfd3e5f6b010d5aec8dd2952cf634ab0123102faa7b9987e1cd4508d76cd0ab62f8bb37f086bb51897da112032f5c8928cd16aafd9972a5ffa77118cac4d8"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>클래스</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Admin.html" data-type="entity-link" >Admin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Api.html" data-type="entity-link" >Api</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthResponseDto.html" data-type="entity-link" >AuthResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Bid.html" data-type="entity-link" >Bid</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAdminDto.html" data-type="entity-link" >CreateAdminDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBidDto.html" data-type="entity-link" >CreateBidDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDrDto.html" data-type="entity-link" >CreateDrDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateHistoryDto.html" data-type="entity-link" >CreateHistoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInquiryDto.html" data-type="entity-link" >CreateInquiryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateManagementDto.html" data-type="entity-link" >CreateManagementDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMonitoringDto.html" data-type="entity-link" >CreateMonitoringDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProfileDto.html" data-type="entity-link" >CreateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomException.html" data-type="entity-link" >CustomException</a>
                            </li>
                            <li class="link">
                                <a href="classes/Dr.html" data-type="entity-link" >Dr</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorDetail.html" data-type="entity-link" >ErrorDetail</a>
                            </li>
                            <li class="link">
                                <a href="classes/History.html" data-type="entity-link" >History</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpClient.html" data-type="entity-link" >HttpClient</a>
                            </li>
                            <li class="link">
                                <a href="classes/Inquiry.html" data-type="entity-link" >Inquiry</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Management.html" data-type="entity-link" >Management</a>
                            </li>
                            <li class="link">
                                <a href="classes/Monitoring.html" data-type="entity-link" >Monitoring</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaExceptionFilter.html" data-type="entity-link" >PrismaExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPasswordDto.html" data-type="entity-link" >ResetPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPasswordDto-1.html" data-type="entity-link" >ResetPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPasswordReqDto.html" data-type="entity-link" >ResetPasswordReqDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseDto.html" data-type="entity-link" >ResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAdminDto.html" data-type="entity-link" >UpdateAdminDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBidDto.html" data-type="entity-link" >UpdateBidDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDrDto.html" data-type="entity-link" >UpdateDrDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHistoryDto.html" data-type="entity-link" >UpdateHistoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInquiryDto.html" data-type="entity-link" >UpdateInquiryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateManagementDto.html" data-type="entity-link" >UpdateManagementDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMonitoringDto.html" data-type="entity-link" >UpdateMonitoringDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProfileDto.html" data-type="entity-link" >UpdateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDispoDTO.html" data-type="entity-link" >UserDispoDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDTO.html" data-type="entity-link" >UserDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Kpx.html" data-type="entity-link" >Kpx</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KpxService.html" data-type="entity-link" >KpxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>인터페이스</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ApiConfig.html" data-type="entity-link" >ApiConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthResponseDto.html" data-type="entity-link" >AuthResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailDTO.html" data-type="entity-link" >EmailDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FullRequestParams.html" data-type="entity-link" >FullRequestParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HttpResponse.html" data-type="entity-link" >HttpResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResetPasswordDto.html" data-type="entity-link" >ResetPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResetPasswordReqDto.html" data-type="entity-link" >ResetPasswordReqDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseDto.html" data-type="entity-link" >ResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserDispoDTO.html" data-type="entity-link" >UserDispoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserDTO.html" data-type="entity-link" >UserDTO</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>기타</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">함수</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">타입 별칭</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">변수</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});