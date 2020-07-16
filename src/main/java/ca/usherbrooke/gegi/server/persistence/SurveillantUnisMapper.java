package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.surveillant;
import ca.usherbrooke.gegi.server.business.surveillantUnis;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface SurveillantUnisMapper {
    List<surveillantUnis> select(@Param("idSurveillant") int idSurveillant);
    List<surveillantUnis> selectAll();
    List<surveillantUnis> selectId(@Param("nom") String nom, @Param("prenom") String prenom);
    void insert(@Param("Surveillant") surveillantUnis Surveillant);
}
