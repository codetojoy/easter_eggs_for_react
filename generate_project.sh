
#!/bin/bash

if [ $# -ne 2 ] ; then
    echo "usage: ./generate_project.sh src_dir target_dir"
    exit -1
fi

if [ ! -d $1 ] ; then
    echo "error: $1 not found"
    exit -1
fi

if [ -d $2 ] ; then
    echo "error: $2 already exists"
    exit -1
fi

echo "copying template ..."

SRC_DIR=$1
DEST_DIR=$2

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
