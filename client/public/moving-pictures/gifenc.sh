#!/bin/sh
# From: http://blog.pkh.me/p/21-high-quality-gif-with-ffmpeg.html

palette="/tmp/palette.png" 
filters="fps=15,scale=-1:-1:flags=lanczos" 

ffmpeg -v warning -i $1 -vf "$filters,palettegen=stats_mode=diff" -y $palette
ffmpeg -v warning -i $1 -i $palette -lavfi "$filters [x]; [x][1:v] paletteuse=dither=bayer:bayer_scale=2" -y $2
