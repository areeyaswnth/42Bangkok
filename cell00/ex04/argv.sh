#!/bin/bash
i=0
if [ $# -gt 0 ]
then
	for args in $@
	do
		if [ $i -lt 3 ]
		then
			echo "$args"
		fi
		(( i += 1 ))
	done
else
	echo "No arguments supplied"
fi
