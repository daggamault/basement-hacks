"npx nx g @nx/nest:application --name=api --directory=apps --projectNameAndRootFormat=derived --strict=true --tags=api" | Invoke-Expression
"npx nx g @nx/angular:application --name=web --bundler=webpack --directory=apps --backendProject=api --projectNameAndRootFormat=derived --style=scss --tags=web" | Invoke-Expression

$domains = @("orders", "customers", "products", "carts", "catalogs", "identities", "agents")
foreach($domain in $domains) {
  "npx nx g @nx/nest:library --name=application --buildable=true --directory=libs/api/$domain --projectNameAndRootFormat=derived --tags=api,application" | Invoke-Expression
  "npx nx g @nx/nest:library --name=domain --buildable=true --directory=libs/api/$domain --projectNameAndRootFormat=derived --tags=api,domain" | Invoke-Expression
  "npx nx g @nx/nest:library --name=infrastructure --buildable=true --directory=libs/api/$domain --projectNameAndRootFormat=derived --tags=api,infrastructure" | Invoke-Expression
}

$features = @("admin", "catalog", "cart", "customer")
foreach($feature in $features) {
  "npx nx g @nx/angular:library --name=application --buildable=true --directory=libs/web/$feature --routing=true --projectNameAndRootFormat=derived --style=scss --tags='web,application'" | Invoke-Expression
  "npx nx g @nx/angular:library --name=domain --buildable=true --directory=libs/web/$feature --projectNameAndRootFormat=derived --style=scss --tags='web,domain'" | Invoke-Expression
  "npx nx g @nx/angular:library --name=infrastructure --buildable=true --directory=libs/web/$feature --projectNameAndRootFormat=derived --style=scss --tags='web,infrastructure'" | Invoke-Expression
}
