#!/bin/bash

cd dist
tar -zcf release.tar.gz bcc-calculator/
zip -rq release.zip bcc-calculator/