 open ftp.strato.de
 user $FTP_USER $FTP_PASS
 cd dist
 mdelete *.*
 cd ..
 put ./dist /dist
 bye