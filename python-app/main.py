from prometheus_client import start_http_server, Gauge
import time
import json
import os

job_health = Gauge(
    'job_health',
    'Health metric for job from uc4',
    [
        'application',
        'name',
        'type',
        'queue',
        'run_id',
        'activation_time',
        'start_time',
        'end_time',
        'duration_time',
        'agent',
        'platform',
        'parent',
        'reference_run_id',
        'user',
        'estimated_runtime',
        'alias',
        'activator',
        'activator_object_type',
        'title'
    ]
)

def set_or_default(data, key, default):
    return data[key] if key in data else default

def subtract_time(data, key1, key2):
    if key1 not in data or key2 not in data:
        return '-'
    time1 = data[key1]
    time2 = data[key2]
    unix_time1 = time.mktime(time.strptime(time1, "%Y-%m-%dT%H:%M:%SZ"))
    unix_time2 = time.mktime(time.strptime(time2, "%Y-%m-%dT%H:%M:%SZ"))
    duration = unix_time2 - unix_time1
    hours, remainder = divmod(duration, 3600)
    minutes, seconds = divmod(remainder, 60)
    formatted_duration = "{:02}:{:02}:{:02}".format(int(hours), int(minutes), int(seconds))
    return formatted_duration

def update_metrics():
    # JSON files directory
    directory = 'data/'  
    if os.path.isdir(directory):
        #list of files in the dir
        files = os.listdir(directory)
        # filter fils
        json_files = [file for file in files if file.endswith('.json')]
        for file_name in json_files:
            # Read files
            file_path = os.path.join(directory, file_name)
            with open(file_path, 'r') as file:
                raw_data = file.read()
                try:
                    json_data = json.loads(raw_data)
                except Exception as e:
                    print(f"Error loading JSON data: {e}")
                    continue
               
                for job in json_data['data']:
                    job_health.labels(
                        application=file_name.replace('.json', ''),
                        name=set_or_default(job, 'name', 'undefined').replace('#', '-').replace('JOBS.', ''),
                        type=set_or_default(job, 'type', 'undefined'),
                        queue=set_or_default(job, 'queue', 'undefined'),
                        run_id=set_or_default(job, 'run_id', -1),
                        activation_time=set_or_default(job, 'activation_time', '-').replace('T', ' ').replace('Z', ''),
                        start_time=set_or_default(job, 'start_time', '-').replace('T', ' ').replace('Z', ''),
                        end_time=set_or_default(job, 'end_time', '-').replace('T', ' ').replace('Z', ''),
                        duration_time=subtract_time(job, 'start_time', 'end_time'),
                        agent=set_or_default(job, 'agent', 'undefined'),
                        platform=set_or_default(job, 'platform', 'undefined'),
                        parent=set_or_default(job, 'parent', 'undefined'),
                        reference_run_id=set_or_default(job, 'reference_run_id', 'undefined'),
                        user=set_or_default(job, 'user', 'undefined'),
                        estimated_runtime=set_or_default(job, 'estimated_runtime', 'undefined'),
                        alias=set_or_default(job, 'alias', 'undefined'),
                        activator=set_or_default(job, 'activator', -1),
                        activator_object_type=set_or_default(job, 'activator_object_type', 'undefined'),
                        title=set_or_default(job, 'title', 'undefined')
                    ).set(job['status'])

if __name__ == '__main__':
    start_http_server(8000)
    while True:
        update_metrics()
        time.sleep(15)  # Check directory every 15 seconds
