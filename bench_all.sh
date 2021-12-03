#!/bin/bash
tsc
for d in dist/* ; do
    if [ -f "$d/benchmark.js" ]; then
        node "$d/benchmark.js"
    fi
done