#!/bin/sh
cd /app
npm i
npm test
cd /app/android
./gradlew assembleRelease crashlyticsUploadDistributionRelease
