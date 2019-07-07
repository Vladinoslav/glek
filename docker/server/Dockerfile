FROM python:3.7

LABEL Name=glek Version=0.0.1
EXPOSE 8000

WORKDIR /project
ADD . /project
RUN mkdir /project/tmp/
ADD ./docker/server/requirements.txt /tmp/requirements.txt

# Using pip:
RUN pip install -r /tmp/requirements.txt
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
