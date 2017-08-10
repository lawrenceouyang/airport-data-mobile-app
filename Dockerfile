FROM sfo-ciprcs01.flysfo.com:8600/android_mobile_app

# Set work directory to /app
WORKDIR /app

# Copy the current directory to /app
ADD . /app

# Allow entrypoint to be executed
RUN chmod 755 /app/entrypoint.sh

# Execute the gradle build
ENTRYPOINT ["/app/entrypoint.sh"]