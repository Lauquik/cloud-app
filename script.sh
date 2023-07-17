#!/bin/bash
cd api
# npm install
node index.js &

cd ..

# npm install
# public_ip=$(curl -s https://api.ipify.org)
# if [ -f "script.js" ]; then
#     sed -i "s/\blocalhost\b/$public_ip/g" "script.js"
# else
#     echo "file does not exist"
# fi

node app.js &

