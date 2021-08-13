if [ -d ./node_modules]; then
    echo Delete node_modules...
    rm -d -r node_modules
fi
if [ -f package-lock.json]; then
    echo Delete package-lock.json...
    rm package-lock.json
fi
echo Clear npm cache...
npm cache verify --force
echo Running npm install...
npm install
echo Update package.json
./abi.sh