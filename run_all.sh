#!/bin/bash
tsc
for d in dist/src/* ; do
    if [ -f "$d/aoc.js" ]; then
        node "$d/aoc.js"
    fi
done