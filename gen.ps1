# "npx nx g @nx/nest:application --name=api --directory=apps --projectNameAndRootFormat=derived --strict=true --tags=api" | Invoke-Expression
# "npx nx g @nx/angular:application --name=web --bundler=webpack --directory=apps --backendProject=api --projectNameAndRootFormat=derived --style=scss --tags=web" | Invoke-Expression

$apiFeatures = @("orders", "customers", "products", "carts", "catalogs", "identities", "agents")
foreach($apiFeature in $apiFeatures) {
  "npx nx g @nx/nest:library --name=data-access --buildable=true --directory=libs/api/$apiFeature --projectNameAndRootFormat=derived --tags=api,data-access" | Invoke-Expression
  "npx nx g @nx/nest:library --name=features --buildable=true --directory=libs/api/$apiFeature --projectNameAndRootFormat=derived --tags=api,features" | Invoke-Expression
  "npx nx g @nx/nest:library --name=utils --buildable=true --directory=libs/api/$apiFeature --projectNameAndRootFormat=derived --tags=api,utils" | Invoke-Expression
}

$webFeatures = @("auth", "admin", "catalog", "cart", "customer")
foreach($webFeature in $webFeatures) {
  "npx nx g @nx/angular:library --name=data-access --buildable=true --directory=libs/web/$webFeature --routing=true --projectNameAndRootFormat=derived --style=scss --tags='web,data-access'" | Invoke-Expression
  "npx nx g @nx/angular:library --name=features --buildable=true --directory=libs/web/$webFeature --routing=true --projectNameAndRootFormat=derived --style=scss --tags='web,features'" | Invoke-Expression
  "npx nx g @nx/angular:library --name=ui --buildable=true --directory=libs/web/$webFeature --projectNameAndRootFormat=derived --style=scss --tags='web,ui'" | Invoke-Expression
  "npx nx g @nx/angular:library --name=utils --buildable=true --directory=libs/web/$webFeature --projectNameAndRootFormat=derived --style=scss --tags='web,utils'" | Invoke-Expression
}

"npx nx g @nx/nest:library --name=data-access --buildable=true --directory=libs/api/shared --projectNameAndRootFormat=derived --tags=api,data-access" | Invoke-Expression
"npx nx g @nx/nest:library --name=utils --buildable=true --directory=libs/api/shared --projectNameAndRootFormat=derived --tags=api,utils" | Invoke-Expression

"npx nx g @nx/angular:library --name=data-access --buildable=true --directory=libs/web/shared --routing=true --projectNameAndRootFormat=derived --style=scss --tags='web,data-access'" | Invoke-Expression
"npx nx g @nx/angular:library --name=ui --buildable=true --directory=libs/web/shared --routing=true --projectNameAndRootFormat=derived --style=scss --tags='web,ui'" | Invoke-Expression
"npx nx g @nx/angular:library --name=utils --buildable=true --directory=libs/web/shared --projectNameAndRootFormat=derived --style=scss --tags='web,utils'" | Invoke-Expression

"npx nx g @nx/js:library --name=data-access --unitTestRunner=jest --directory=libs/shared --includeBabelRc=true --projectNameAndRootFormat=derived --tags='data-access'" | Invoke-Expression
"npx nx g @nx/js:library --name=utils --unitTestRunner=jest --directory=libs/shared --includeBabelRc=true --projectNameAndRootFormat=derived --tags='utils'" | Invoke-Expression
