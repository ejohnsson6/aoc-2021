#!/bin/bash
tsc
for d in dist/* ; do
    if [ -f "$d/aoc.js" ]; then
        node "$d/aoc.js"
    fi
done