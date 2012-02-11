#!/bin/sh
options="$@"

coffee --compile $options --output ./js/ ./coffee/*
