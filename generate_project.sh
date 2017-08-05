
#!/bin/bash

if [ $# -eq 0 ] ; then
    echo "usage: ./generate_project.sh target_dir"
    exit -1
fi

if [ -d $1 ] ; then
    echo "error: $1 already exists"
    exit -1
fi

echo "copying template ..."

DEST_DIR=$1
SRC_DIR=./reference_project

mkdir $DEST_DIR

cp $SRC_DIR/package.json $DEST_DIR
cp $SRC_DIR/webpack.config.js $DEST_DIR
cp $SRC_DIR/RunIt.md $DEST_DIR

cp -r $SRC_DIR/app $DEST_DIR

cd $DEST_DIR

echo "installing ..."

npm install

cd ..

echo "Ready."
