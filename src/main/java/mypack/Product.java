package mypack;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(schema="mydb" ,name="product")
public class Product
{

	private int id;
	private String name1;
	private int qty,price;
	@Id
	@GeneratedValue(strategy = IDENTITY)
	public int getId() {
		return this.id;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName1() {
		return this.name1;
	}

	public void setName1(String name) {
		this.name1 = name;
	}
}
