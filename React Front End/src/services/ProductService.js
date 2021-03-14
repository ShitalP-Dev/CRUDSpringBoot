import axios from 'axios';

const Product_API_BASE_URL = "http://localhost:8080/product";

class ProductService {

    getProduct(){
        return axios.get(Product_API_BASE_URL);
    }

    addProduct(e){
        return axios.post(Product_API_BASE_URL+'/',e);
    }

    getProductById(Id){
        return axios.get(Product_API_BASE_URL + '/' + Id);
    }

    updateProduct(e, eId){
        return axios.put(Product_API_BASE_URL + '/' + eId, e);
    }

    deleteProduct(Id){
        return axios.delete(Product_API_BASE_URL + '/' + Id);
    }
}

export default new ProductService()

/*{
    @RequestMapping("/product/")
public class ProductController
{
	@Autowired
	ProductManager manager;
	@GetMapping(value = "/product",headers = "Accept=application/json")  
	 public String showProducts()
	 {
		  return new Gson().toJson(manager.getProducts());
	 }
	@GetMapping(value = "product/{pid}", headers = "Accept=application/json")  
	 public Product getPro(@PathVariable int pid)
	 {
		Product p=manager.getProduct(pid);
		return p;
	 }
	@DeleteMapping(value = "product/{pid}", headers = "Accept=application/json")  
	 public void removepro(@PathVariable int pid)
	 {
		manager.delete(pid);
	 }
	@PutMapping(value = "product/{pid}",headers = "Accept=application/json")  
	 public void updatepro(@RequestBody Product product,@PathVariable int pid)
	 {
		manager.update(product,pid);
	 }
	@PostMapping(value = "product/", headers = "Accept=application/json")  
	 public void addpro(@RequestBody Product product)
	 {
		System.out.println("addpro called");
		manager.addProduct(product);
	 }
}
}*/


/*{
    @RequestMapping("/api/v1/")
public class EmployeeController {
	
	// get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	// get employee by id rest api
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}
	
	// update employee rest api
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmailId(employeeDetails.getEmailId());
		
		Employee updatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}
	
	// delete employee rest api
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}	
}
}*/