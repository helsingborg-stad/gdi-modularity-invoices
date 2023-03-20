#!/bin/bash

jsonData='
[
    ["GDI Cases module", "GDI Invoices Module"],
    ["GDI Modularity Cases", "GDI Modularity Invoices"],
    ["GDI_CASES", "GDI_INVOICES"],
    ["GdiCases", "GdiInvoices"],
    ["mod-my-cases", "mod-my-invoices"],
    ["MyCases", "MyInvoices"],
    ["gdi-modularity-cases", "gdi-modularity-invoices"],
    ["my-cases", "my-invoices"],
    ["module-my-cases-mock-data", "module-my-invoices-mock-data"],
    ["js-gdi-modularity-my-cases", "js-my-invoices"]
]
'

for row in $(echo "${jsonData}" | jq -r '.[] | @base64'); do
    _jq() {
     echo "${row}" | base64 --decode | jq -r "${1}"
    }

    SEARCH=$(_jq '.[0]')
    REPLACE=$(_jq '.[1]')

    # Replace dir names 
    find . -not -path '*/.*' -depth -name "*${SEARCH}*" -type d -exec bash -c 'PATH={} && NEW_PATH=${PATH//'${SEARCH}'/'${REPLACE}'} && /bin/mv ${PATH} ${NEW_PATH}' \;
    # Replace file names
    find . -not -path '*/.*'-depth -name "*${SEARCH}*" -type f -exec bash -c 'PATH={} && NEW_PATH=${PATH//'${SEARCH}'/'${REPLACE}'} && /bin/mv ${PATH} ${NEW_PATH}' \;
    # Replace file content
    find . -not -path '*/.*' -type f -not -name 'replace.*' -print0 | xargs -0 sed -i '' -e 's/'"${SEARCH}"'/'"${REPLACE}"'/g' 
done