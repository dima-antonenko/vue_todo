Vue.component('task', {
	props: ['data'],
	methods: {
		task_done() {
			this.$emit('task_done')
		}
 	},
	template: `
		<div class="task">
			<div>
				<h3 class="task__title">{{ data.title }}</h3>
				<p class="task_desc">{{ data.description }}</p>
			</div>
			<button @click="task_done()" class="task__done ">done</button>
		</div>
	`
})

var vue = new Vue({
	el: '#app',
	data: {
		new_task: {
			title: '',
			description: ''
		},
		tasks: [
			{title: 'Learn Vue.js', description: 'Learn theory by reading doc'},
			{title: 'Task 2', description: 'Description task 2'},
			{title: 'Task 3', description: 'Description task 3'}
		]
	},
	methods: {
		delete_task(id){
			this.tasks.splice(id, 1)
		},
		add_task(){
			if(this.new_task.title != ''){
				this.tasks.push({
					title: this.new_task.title,
					description: this.new_task.description
				})
				this.new_task.title = '';
				this.new_task.description = '';
			}
		}
	}
})